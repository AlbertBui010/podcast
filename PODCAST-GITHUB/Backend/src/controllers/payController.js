const payService = require("../services/payService");

let handleCreateNewPay = async (req, res) => {
  try {
    let infor = await payService.handleCreateNewPay(req.body);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Có lỗi từ máy chủ",
    });
  }
};

let handleGetAllPays = async (req, res) => {
  try {
    let id = req.query.id; //All, id

    if (!id) {
      return res.status(200).json({
        errCode: 1,
        errMessage: "Thiếu dữ liệu",
        pays: [],
      });
    }

    let pays = await payService.handleGetAllPays(id);
    return res.status(200).json({
      errCode: 0,
      errMessage: "Ok",
      pays,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Có lỗi từ máy chủ",
    });
  }
};

let handleEditPay = async (req, res) => {
  let data = req.body;
  let message = await payService.handleEditPay(data);
  return res.status(200).json(message);
};

let handleDeletePay = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      errCode: 1,
      message: "Thiếu dữ liệu!",
    });
  }
  let message = await payService.handleDeletePay(req.query.id);
  return res.status(200).json(message);
};

module.exports = {
  handleCreateNewPay: handleCreateNewPay,
  handleGetAllPays: handleGetAllPays,
  handleEditPay: handleEditPay,
  handleDeletePay: handleDeletePay,
};
