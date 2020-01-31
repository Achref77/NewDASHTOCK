import React from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label,Input}from 'reactstrap';
import axios from 'axios'
​
class EditContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nom: "",
            prenom: "",
            Telephone: "",
            email: "",
            role: "",
            id: "",
            edit: false
            // contact:{}
​
        };
    }
    // getContact = () => {
    //     // this.setState ({contact:this.props.contact.find(el=>el._id=this.props.id)})
    //      axios.get(`/contacts/${this.props.id }`)
    //      .then((res) =>
    //      {this.setState({photo: res.data.photo, name: res.data.name, phone: res.data.phone})})
    // }
​
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
​ handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
​ };
    render() {
        return (<div>
 <Button color="warning" onClick={ () => { this.toggle();this.getContact()}}>Edit</Button>
 <Modal isOpen={ this.state.modal}toggle={this.toggle} className={this.props.className }>
<ModalHeader toggle={ this.toggle }>Edit Contact</ModalHeader>
 <ModalBody>
 <FormGroup>
​
 <Label for="examplephoto">photo</Label>
 <Input id="examplephoto" name="photo" value={ this.state.photo}
  onChange={(e) => this.setState({photo: e.target.value}) } placeholder="Contact photo"
 type="text"/>
​
 <Label for="exampleName">name</Label>
 <Input id="exampleName" name="Name" value={this.state.name}
 onChange={(e) => this.setState({name: e.target.value})}placeholder="Contact name"
 type="text"/>
​
<Label for="examplephone">phone</Label>
 <Input id="examplephone" name="phone" value={ this.state.phone}
 onChange={(e) => this.setState({phone: e.target.value})}placeholder="Contact phone"
type="text"/>
 </FormGroup>
 </ModalBody>
​
<ModalFooter>
<Button color="primary" onClick={
                            () => {
                                axios.put(`/contacts/${
                                    this.props.id
                                }`, {
                                    photo: this.state.photo,
                                    name: this.state.name,
                                    phone: this.state.phone
                                }).then(this.getContact)
​
                                // () => {this.props.putContact(this.props.id,{
                                //     photo: this.state.photo,
                                //     name: this.state.name,
                                //     phone: this.state.phone
                                // })

                                this.toggle()
                            }}>Save</Button>
​
<Button color="secondary" onClick={this.toggle}>Cancel</Button>
</ModalFooter>
</Modal>
</div>);
    }
}
​
export default EditContact;
​
​
​
​
// connect(state=>({...state}))
Réduire
