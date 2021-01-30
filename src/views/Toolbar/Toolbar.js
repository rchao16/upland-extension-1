import React, {Component} from 'react'
import { Icon, Label } from 'semantic-ui-react'
import axios from 'axios'
import './Toolbar.css'

const api = "https://api.upland.me/teleports/counter"

class Toolbar extends Component {
    constructor(props){
        super(props)
        this.state ={
            sendCount: 0
        }
    }

    fetchSendCount = async () => {
        try {
          const authToken = sessionStorage.getItem('auth_token')
          const response = await axios.get(api, {
            headers: {
              'authorization' : authToken
            }
          })
          .then((res) => {
              this.setState({sendCount: res.data.toOtherProp})
          })
          .catch((error) => {
            console.error(error)
          })
        } 
        catch (error) {
          console.log(error)
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.fetchSendCount()
        }, 8000) 
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() { 
        const {sendCount} = this.state
        return (
            <div id='toolbar'>
                <Label>
                    <Icon name='mail' /> {sendCount}
                </Label>
            </div>
        )
    }
}

export default Toolbar