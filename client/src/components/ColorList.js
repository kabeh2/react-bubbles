import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import {
  saveColor,
  deleteRequest,
  addColor
} from "../redux/actions/actionCreators";
import EditColourForm from "./forms/EditColourForm";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({
  colors,
  saveColor,
  deleteRequest,
  addColor,
  match,
  history
}) => {
  console.log("ME", colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    saveColor(match.params.id, colorToEdit, colors);

    setEditing(false);
    setColorToEdit(initialColor);
    history.replace("/bubbles-page");
  };

  const addNewColor = e => {
    e.preventDefault();

    addColor(colors, colorToAdd);
    setEditing(false);
    setColorToAdd(initialColor);
    history.replace("/bubbles-page");
  };

  const cancelBtn = () => {
    setColorToEdit(initialColor);
    setEditing(false);
    history.replace("/bubbles-page");
  };

  const deleteColor = color => {
    // make a delete request to delete this color

    deleteRequest(color.id, colors);
    history.replace("/bubbles-page");
    setEditing(false);
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} className="color-list">
            <span
              className="delete color-list--btn"
              onClick={() => deleteColor(color)}
            >
              x
            </span>{" "}
            <Link to={`/bubbles-page/${color.id}`}>
              <span
                onClick={() => editColor(color)}
                className="color-list--name"
              >
                {color.color}
              </span>
              <div
                className="color-box"
                style={{ backgroundColor: color.code.hex }}
              />
            </Link>
          </li>
        ))}
      </ul>
      {!editing && (
        <Link to="/bubbles-page/add-color">
          <Button
            primary
            onClick={() => setEditing(true)}
            style={{ marginBottom: 60 }}
          >
            Add Color
          </Button>
        </Link>
      )}

      {editing && colorToEdit && (
        <EditColourForm
          saveEdit={saveEdit}
          addNewColor={addNewColor}
          setColorToEdit={setColorToEdit}
          colorToEdit={colorToEdit}
          setColorToAdd={setColorToAdd}
          colorToAdd={colorToAdd}
          cancelBtn={cancelBtn}
        />
      )}
      <div className="spacer" />
    </div>
  );
};

const mapStateToProps = state => ({
  colors: state.data
});

const mapDispatchToProps = dispatch => ({
  saveColor: (id, color, colorList) =>
    dispatch(saveColor(id, color, colorList)),
  deleteRequest: (id, colorList) => dispatch(deleteRequest(id, colorList)),
  addColor: (colorList, color) => dispatch(addColor(colorList, color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);
