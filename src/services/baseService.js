class BaseService {
  constructor(Model) {
    this.Model = Model;
  }

  load(where) {
    return this.Model.find(where || {});
  }

  create(data) {
    return new this.Model(data).save();
  }

  findOne(where) {
    return this.Model.findOne(where || {});
  }

  update(id, data, isTheReturnValueNew) {
    return this.Model.findByIdAndUpdate(id, data, {
      new: isTheReturnValueNew,
    });
  }

  updateWhere(where, data, isTheReturnValueNew) {
    return this.Model.findOneAndUpdate(where, data, {
      new: isTheReturnValueNew,
    });
  }

  delete(id) {
    return this.Model.findByIdAndDelete(id);
  }

  deleteWhere(where) {
    return this.Model.findOneAndDelete(where);
  }
}

module.exports = BaseService;
