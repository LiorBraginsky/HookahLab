import React from "react";
import MyInput from "../MyInput";
import MyForm from "../MyFrom";
import MyButton from "../MyButton";
import "./styles.css";

class TabaccoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      tobaccoInfo: {},
      errors: {}
    };
  }

  componentDidMount() {
    const { isEdit, value } = this.props
    if (isEdit) {
      console.log(value);

      this.setState({
        tobaccoInfo: value
      })
    }
  }

  onChangeHandler = e => {
    this.setState({
      tobaccoInfo: {
        ...this.state.tobaccoInfo,
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
    const { tobaccoInfo } = this.state;

    if (!tobaccoInfo.nameTabacco
      || !tobaccoInfo.tasteTabacco
      // || !tobaccoInfo.descriptionTabacco
    ) {
      let erorrs = {};

      if (!tobaccoInfo.nameTabacco) {
        erorrs.nameTabacco = "type Name Tabacco";
      }

      if (!tobaccoInfo.tasteTabacco) {
        erorrs.tasteTabacco = "type Taste for Tabacco";
      }

      // if (!tobaccoInfo.descriptionTabacco) {
      //   erorrs.descriptionTabacco = "type Tabacco description";
      // }

      this.setState({
        hasError: true,
        errors: erorrs
      });
    } else {
      this.setState({
        hasError: false
      });

      this.props.onSubmit(tobaccoInfo);
    }

    // localStorage.setItem('tobbacoItems', JSON.stringify(tobaccoInfo))

  };

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem('tobbacoItems', JSON.stringify(nextState.tobaccoInfo))
  // } 

  render() {
    const { errors, tobaccoInfo } = this.state;
    const { page } = this.props;
    return (
      <div className="TabaccoFrom">
        <h1>{page}</h1>
        <MyForm>
          <MyInput
            onChange={this.onChangeHandler}
            name="nameTabacco"
            label="Name Tabacco"
            value={tobaccoInfo.nameTabacco || ''}
            error={errors.nameTabacco}
          />
          <MyInput
            onChange={this.onChangeHandler}
            name="tasteTabacco"
            label="Tabacco taste"
            error={errors.tasteTabacco}
            value={tobaccoInfo.tasteTabacco || ''}
          />
          <label>Add Description</label>
          <br />
          <textarea
            name="description"
            onChange={this.onChangeHandler}
            // error={errors.descriptionTabacco}
            // value={tobaccoInfo.descriptionTabacco}
            defaultValue="This is a description."
            cols="40"
            rows="3"
          />
          <MyButton onClick={this.submit} type="submit">
            {page}
          </MyButton>
        </MyForm>
      </div>
    );
  }
}

export default TabaccoForm;
