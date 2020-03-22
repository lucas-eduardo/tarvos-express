class TestController {
  async show(req, res) {
    return res.json({msg: 'Test route'});
  }
}

export default new TestController();
