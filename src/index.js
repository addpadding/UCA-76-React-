// 79

// components

class App extends React.Component {
    render() {
        return (
            <div className="app">
                app

                <Header />
                <ListItems />
                <AddItem />

            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return <header> Header </header>
    }
}

class ListItems extends React.Component {
    render() {
        return <div>
            List Items Component ===

            <Item />
            <Item />
            <Item />
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
    render() {
        return (
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))