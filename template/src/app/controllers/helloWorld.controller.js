class HelloWorldController {
  async show(req, res) {
    return res.json({ msg: 'Hello World' });
  }
}

export default new HelloWorldController();
