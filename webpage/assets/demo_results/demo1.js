/**
 * Heatwave generation results data
 */
var heatwaveResultsData = [
    {
      color: '#ff6600',
      title: 'Heatwave Visualization 1',
      description: 'Sequential morphing of heatwave patterns showing temperature gradients across regions.'
    },
    {
      color: '#ff4400',
      title: 'Heatwave Visualization 2',
      description: 'Temperature anomaly visualization showing intensity variations during peak heatwave conditions.'
    },
    {
      color: '#ff3300',
      title: 'Heatwave Visualization 3',
      description: 'Temporal evolution of morphing heatwave patterns throughout a 7-day extreme event.'
    }
  ];
  
  // Function to show heatwave results
  function showHeatwaveResults() {
    ResultsViewer.showResults('Heatwave Generation Results', heatwaveResultsData);
  }