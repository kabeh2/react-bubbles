import React from "react";

const EditColourForm = ({
  saveEdit,
  addNewColor,
  setColorToEdit,
  setColorToAdd,
  colorToAdd,
  colorToEdit,
  cancelBtn
}) => {
  return (
    <>
      <form
        onSubmit={
          colorToEdit.color || colorToEdit.code.hex ? saveEdit : addNewColor
        }
      >
        <legend>edit color</legend>
        <label>
          color name:
          <input
            onChange={e =>
              colorToEdit.color || colorToEdit.code.hex
                ? setColorToEdit({
                    ...colorToEdit,
                    color: e.target.value
                  })
                : setColorToAdd({
                    ...colorToAdd,
                    color: e.target.value,
                    id: Date.now()
                  })
            }
            value={
              colorToEdit.color || colorToEdit.code.hex
                ? colorToEdit.color
                : colorToAdd.color
            }
          />
        </label>
        <label>
          hex code:
          <input
            onChange={e =>
              colorToEdit.color || colorToEdit.code.hex
                ? setColorToEdit({
                    ...colorToEdit,
                    code: { hex: e.target.value }
                  })
                : setColorToAdd({
                    ...colorToAdd,
                    code: { hex: e.target.value },
                    id: Date.now()
                  })
            }
            value={
              colorToEdit.code.hex || colorToEdit.color
                ? colorToEdit.code.hex
                : colorToAdd.code.hex
            }
          />
        </label>
        <div className="button-row">
          <button type="submit">save</button>
          <button onClick={cancelBtn}>cancel</button>
        </div>
      </form>
    </>
  );
};

export default EditColourForm;
