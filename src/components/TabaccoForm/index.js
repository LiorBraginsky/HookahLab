import React from "react";
import MyInput from "../MyInput";
import MyForm from "../MyFrom";
import MyButton from "../MyButton";
import { addTobacco } from "../../store/actions";
import "./styles.css";

class TabaccoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      tabaccoInfo: {},
      errors: {}
    };
  }

  onChangeHandler = e => {
    this.setState({
      tabaccoInfo: {
        ...this.state.tabaccoInfo,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ""
      }
    });
  };

  submit = e => {
    e.preventDefault();
    const { tabaccoInfo } = this.state;

    if (!tabaccoInfo.nameTabacco || !tabaccoInfo.tasteTabacco) {
      let erorrs = {};

      if (!tabaccoInfo.nameTabacco) {
        erorrs.nameTabacco = "type Name Tabacco";
      }

      if (!tabaccoInfo.tasteTabacco) {
        erorrs.tasteTabacco = "type Taste for Tabacco";
      }

      this.setState({
        hasError: true,
        errors: erorrs
      });
    } else {
      this.setState({
        hasError: false
      });

      this.props.onSubmit(tabaccoInfo);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="TabaccoFrom">
        <h1>Add Tabacco</h1>
        <MyForm>
          <MyInput
            onChange={this.onChangeHandler}
            name="nameTabacco"
            label="Name Tabacco"
            error={errors.nameTabacco}
          />
          <MyInput
            onChange={this.onChangeHandler}
            name="tasteTabacco"
            label="Tabacco taste"
            error={errors.tasteTabacco}
          />
          <label>Add Description</label>
          <br />
          {/*<textarea name={"comment"} cols="40" rows="3" />*/}
          <MyButton onClick={this.submit} type="submit">
            Add Tabacco
          </MyButton>
        </MyForm>
      </div>
    );
  }
}

export default TabaccoForm;
