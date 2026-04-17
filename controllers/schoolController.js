const db = require("../config/db");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validation
  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ message: "Invalid coordinates" });
  }

  const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "School added successfully",
      id: result.insertId,
    });
  });
};



function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: "User location required" });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) return res.status(500).json(err);

    const sorted = results
      .map((school) => {
        const distance = calculateDistance(
          latitude,
          longitude,
          school.latitude,
          school.longitude
        );

        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  });
};