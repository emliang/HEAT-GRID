/**
 * Temperature analysis results data
 */
var demandResultsData = [
    {
      color: '#3366ff',
      title: 'Temperature Distribution',
      description: 'Statistical distribution of temperature anomalies across different regions.'
    },
    {
      color: '#5588ff',
      title: 'Temporal Trends',
      description: 'Multi-year trends in temperature variations showing increasing frequency of extremes.'
    }
  ];
  
  // Function to show temperature results
  function showDemandResults() {
    ResultsViewer.showResults('Demand Calibration Results', demandResultsData);
  }