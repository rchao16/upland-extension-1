import React, {Component} from 'react'
import { Icon, Label } from 'semantic-ui-react'
import axios from 'axios'

const api = "https://api.upland.me/teleports/counter"

class Toolbar extends Component {

    fetchSendCount = async () => {
        try {
          const authToken = sessionStorage.getItem('auth_token')
          const response = await axios.get(api, {
            headers: {
              'authorization' : authToken
            }
          })
          .then((res) => {
              console.log(res.data.toOtherProp)
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
        }, 5000) 
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() { 
        // const {sendCount} = this.props.toolbar
        return (
            <Label>
                <Icon name='mail' /> 23
            </Label>
        )
    }
}

export default Toolbar