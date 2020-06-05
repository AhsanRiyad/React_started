import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { deletePost } from '../actions/deletePost'


class Post extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        console.log('mounting about component');
        console.log(this.props);
        let id = this.props.match.params.id;
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div>
                <h1>I  am in the post</h1>
                <Button variant="contained" onClick={this.props.deletePost} color="secondary">
                    Secondary
                </Button>
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //holds  the value of props of this component
    console.log(ownProps)
    return {
        post: state.post
    }
}


const mapDispatchToProps = (dispatch) => {
    return { deletePost: (id) => { dispatch(deletePost(1)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)