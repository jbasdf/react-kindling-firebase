"use strict";

import Constants   from "../constants";
import Dispatcher  from "../dispatcher";
import User        from "../utils/user";

export default {

  create(payload) {
    Dispatcher.dispatch({ action: Constants.REGISTER_PENDING });
    User.create(payload);
  }

};
