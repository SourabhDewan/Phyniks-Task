import {  Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import PieChartCreate from "./components/PieChart";


class Index extends React.Component{
  state = {
    open: false,
    chartData: null
  }
  render(){
    return(
    <Page
      title='Product selector'
      primaryAction={{
        content: 'Select products',
        onAction: () => this.setState({open: true})
      }}
    >
      <ResourcePicker 
        resourceType="Product"
        open={this.state.open}
        onCancel={() => this.setState({open: false}) }
        onSelection={(resources) => this.handleSelection(resources)}
      /> 
       <div className="App" style={{width:"50%"}}>
        <div className="chart">
          <PieChartCreate data={this.state.chartData}/>
        </div>
       </div>
    </Page>
    )
  }
  handleSelection = (resources) => {
    const productFromResources = resources.selection;
    this.setState({open: false})
    console.log(productFromResources)
    this.setState({chartData : productFromResources})
  }
}


export default Index;
