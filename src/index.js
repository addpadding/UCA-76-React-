// 79

// components

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
            item: ""
        }

        // this.changeInputVal = (e) => {
        //     this.setState({
        //         item: e.target.value
        //     })
        // }

        this.changeInputVal = this.changeInputVal.bind(this);

        this.submitForm = (e) => {
            e.preventDefault();
            let products = [...this.state.products, {
                id: Math.random(),
                name: this.state.item
            }];
            this.setState({
                products,
                item: ""
            })
        }

        this.deleteItem = (id) => {
            let products = [...this.state.products]
            console.log(id);

            let newProducts = products.filter((product) => product.id != id) // true
            this.setState({
                products: newProducts
            })
        }
    }

    changeInputVal(e) {
        this.setState({
            item: e.target.value
        })
    }

    render() {
        return (
            <div className="app">
                <Header />

                <ListItems products={this.state.products} removeItem={this.deleteItem} />

                <AddItem
                    changeInput={this.changeInputVal}
                    saveData={this.submitForm}
                    item={this.state.item}
                />

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
        return (
            <div>
                {this.props.products.length == 0 && <div>There no items</div>}
                {
                    this.props.products.map((product) =>
                        <Item
                            id={product.id}
                            item={product.name}
                            removeItem={this.props.removeItem}
                        />)
                }
            </div>
        )
    }
}

class Item extends React.Component {
    render() {
        return <div> {this.props.item}
            <button onClick={() => this.props.removeItem(this.props.id)}>
                Delete
            </button>
        </div >
    }
}

class AddItem extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.saveData}>
                <input type="text" onChange={this.props.changeInput} value={this.props.item} />
                <input type="submit" />
            </form>
        )
    }
}

class Footer extends React.Component {
    render() {
        return <footer> Footer </footer>
    }
}

ReactDOM.render(<App />, document.getElementById("app"))