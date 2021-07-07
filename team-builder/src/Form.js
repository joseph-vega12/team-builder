import React from "react";

export default function FriendForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Member:
          <input
            type="text"
            name="member"
            onChange={onChange}
            value={values.member}
          />
        </label>
        <label>
            Nickname:
            <input 
            type="text"
            name="nickname"
            onChange={onChange}
            value={values.nickname}
            />
          </label>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
