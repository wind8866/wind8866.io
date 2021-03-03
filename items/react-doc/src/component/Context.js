import React from 'react';

// 1、创建Context对象
const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'MyDisplayName';// 用于在React Devs中显示

class ThemedButton extends React.Component {
    // 3.2、另一种消费者订阅的方式
    // static contextType = ThemeContext;
    render() {
        // 4.1、进行消费
        console.log(this.context);
        const style = {
            backgroundColor: this.context === 'light' ? '#fff' : '#282c34',
            color: this.context === 'light' ? '#282c34' : '#fff',
            padding: '1em',
            borderRadius: '0.5em',
        };
        
        return (<div>
            {/* 4.2、另一种消费的方法，使用这种方法不再需要3 */}
            <ThemeContext.Consumer>
                {value => (<h2>当前主题：{value}</h2>)}
            </ThemeContext.Consumer>
            <div style={style}>内容内容内容</div>
        </div>)
    }
}
// 3.1、消费者订阅源
ThemedButton.contextType = ThemeContext;

const Toolbar = () => {
    return (<ThemedButton />)
}

class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
        }
    }
    toggle = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        });
    }
    render() {
        const theme = this.state.theme;
        // 2、界定Context监控范围，设置消费者订阅源
        return (<ThemeContext.Provider value={theme}>
            <Toolbar />
            <button onClick={this.toggle}>{theme === 'light' ? 'dark' : 'light'}</button>
        </ThemeContext.Provider>)
    }
}
export default Context;