const db = require("../models");
const Rcs = db.rCospace;

exports.create = (req, res) => {
 
    if (!req.body.checkin) {
      return res.status(400).send({
        message: "Everything can not be empty",
      });
    }
 
    const rcs = {
      checkin: req.body.checkin,
      checkout: req.body.checkout,
      type: req.body.type,
      guest: req.body.guest,
    }
  
    // proses menyimpan kedalam database  
    Rcs.create(rcs)
      .then((data) => {
        res.json({
          message: "data created successfully.",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while creating the Book.",
          data: null,
        });
      });
  
  };
  
  // READ: menampilkan atau mengambil semua data sesuai model dari database
  exports.findAll = (req, res) => {
    Rcs.findAll()
      .then((rCospace) => {
        res.json({
          message: "data retrieved successfully.",
          data: rCospace,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while retrieving books.",
          data: null,
        });
      });
  };
    
  // DELETE: Menghapus data sesuai id yang dikirimkan
  exports.delete = (req, res) => {
    const id = req.params.id;
    Rcs.destroy({
      where: { id },
    })
      .then((num) => {
        if (num == 1) {
          res.json({
            message: "data deleted successfully.",
            data: req.body,
          });
        } else {
          res.json({
            message: `Cannot delete book with id=${id}. Maybe book was not found!`,
            data: req.body,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while deleting the book.",
          data: null,
        });
      });
  };
  
  // Mengambil data sesuai id yang dikirimkan
  exports.findOne = (req, res) => {
    Rcs.findByPk(req.params.id)
      .then((rcs) => {
        res.json({
          message: "data retrieved successfully.",
          data: rcs,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while retrieving book.",
          data: null,
        });
      });
  };
  