import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Letter from './letter'
import withMobileDialog from '@material-ui/core/withMobileDialog';

class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkAnswer: false,
            answer: "",
            trueAnswer: "chow-chow",
            open: false
        }
    }
    handleChange = answer => event => {
        this.setState({
          [answer]: event.target.value,
        });
        console.log(this.state.answer)
      };

      handleSubmit = event => {
       if (this.state.answer === "chow-chow"){
           this.setState({
               checkAnswer: true
           })
       }else{
        // alert('Wrong! Please try again')
        this.setState({
            open: true
        })
       }
        event.preventDefault();
      }

      handleClose = value => {
        this.setState({  open: false });
      };

    render() {
        return (
            <div> {this.state.checkAnswer ? <div><Letter/></div> : 
               
                <div className="center">
                 <style jsx>
                {
                `
                    .center{
                        text-align:center;
                        color:#EDE7F6;
                        font-family:'Roboto'
                    }
                    
                `
                }
                </style>
                    <h1>Question</h1>
                    <h3>What is her favorite animal?</h3>
                    <form onSubmit={this.handleSubmit}>
                       <TextField
                       id="answer"
                       label=""
                       value={this.state.answer}
                       onChange={this.handleChange('answer')}
                       className=""
                       margin="normal"
                    /> <br/>
                    <Button variant="contained"  color="primary" type="submit" value="Submit" >
                        ANSWER
                    </Button>
                </form>
                 <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title"  open={this.state.open} >
        <DialogTitle>Wrong!</DialogTitle>
       
      </Dialog>
                </div>
            }

       

            </div>
        )
    }

}

export default withMobileDialog()(Question);