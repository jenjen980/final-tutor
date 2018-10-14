// import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//  import Field from '../Form/Field';
// // import Button



// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name:'',
//             email: '',
//             phone: '',
//             message: '',
//         };
//         //this ensures this when calling this.updateField refers to form
//         this.updateField = this.updateField.bind(this);
//     }

//     updateField(field, value){
//         this.setState({ [field]: value });
//     }

//     render() {
//         return (
//             <div>
//                 {/* Name field */}
//                 <Field 
//                  onChange={(event) => this.updateField("name", event.target.value)}
//                  value={this.state.name} 
//                  />
//                  {/* email field */}
//                 <Field 
//                  onChange={(event) => this.updateField("email", event.target.value)}
//                  value={this.state.email} 
//                  />
//                  {/* phone field */}
//                 <Field 
//                  onChange={(event) => this.updateField("phone", event.target.value)} 
//                  textarea={true}
//                  value={this.state.phone} 
//                  />
//                  {/* message textarea */}
//                 <Field 
//                  onChange={(event) => this.updateField("message", event.target.value)}
//                  textarea  
//                   value={this.state.message} 
//                   />
//                  {/* Submit Button */}
//                 {/* <Button formValues={this.state} email="" /> */}
//             </div>
//         );
//     }
// }

// export default Form;