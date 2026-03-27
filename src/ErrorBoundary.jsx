import React from "react";  
class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state ={ hasError: false};
    }
    static getDerivedStateFromError(error) {
        console.error(error);
        return { hasError: true};
    }
    render() {
        if (this.state.hasError) {
            return <h2>something went wrong in this card</h2>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;