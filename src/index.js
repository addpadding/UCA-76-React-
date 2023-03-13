// 79

// components

class App extends React.Component {

    constructor() {
        super() // inherit
        this.state = {
            name: "---app comp---",
            title: "---some bla bla---"
        }

        this.changeTitle = () => {
            this.setState({
                title: "new title"
            })
        }

    }

    render() {
        console.log(this); // App

        return (
            <div className="app">
                app
                <br />

                {this.state.title}
                <button onClick={this.changeTitle} >change</button>

                {/* {this.state.name} */}
                {/* <h1>{this.state.title}</h1> */}

                {/* <Header item={this.state.name} /> */}
                {/* <ListItems pro="c_______c" myTitle={this.state.title} /> */}
                <AddItem name="add" />

            </div>
        )
    }
}

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "---Header comp---",
        }
    }

    render() {
        return <header>
            header

            {this.props.item}

            {/* {this.props.test} */}
            {/* <p> {this.state.name} </p> */}

        </header>
    }
}

class ListItems extends React.Component {
    render() {
        return <div>
            List Items Component ===

            {this.props.myTitle}
            {/* {this.props.pro} */}

            <Item />

        </div>
    }
}

class Item extends React.Component {
    render() {
        return <div>Item</div>
    }
}

class AddItem extends React.Component {

    constructor() {
        super()

        this.state = {
            name: "test"
        }

        this.changeValue = (e) => {
            console.log(e.target.value)
            this.setState({
                name: e.target.value
            })
        }

    }

    render() {
        console.log(this); // AddItem

        return (
            <form>

                {this.state.name}

                <input type="text" onChange={this.changeValue} />
                <input type="submit" />
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))