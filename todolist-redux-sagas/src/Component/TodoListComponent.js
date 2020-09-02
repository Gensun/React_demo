import React from "react";
import { Input, Button, List } from "antd";

/// 无状态组件
const TodoListComponent = (props) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "20px" }}>
      <div>
        <Input
          onChange={props.handleinputValue}
          value={props.inputValue}
          placeholder="Basic usage"
          style={{ width: "300px", marginRight: "20px" }}
        />
        <Button onClick={props.handleSaveClick} type="primary">
          提交
        </Button>
      </div>

      <List
        style={{ width: "380px", marginTop: "20px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.deleteItemClick(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

// export class TodoListComponent extends React.Component {
//   render() {
//     return (
// <div style={{ marginTop: "10px", marginLeft: "20px" }}>
//   <div>
//     <Input
//       onChange={this.props.handleinputValue}
//       value={this.props.inputValue}
//       placeholder="Basic usage"
//       style={{ width: "300px", marginRight: "20px" }}
//     />
//     <Button onClick={this.props.handleSaveClick} type="primary">
//       提交
//     </Button>
//   </div>

//   <List
//     style={{ width: "380px", marginTop: "20px" }}
//     bordered
//     dataSource={this.props.list}
//     renderItem={(item, index) => (
//       <List.Item
//         onClick={() => {
//           this.props.deleteItemClick(index);
//         }}
//       >
//         {item}
//       </List.Item>
//     )}
//   />
// </div>
//     );
//   }
// }

export default TodoListComponent;
