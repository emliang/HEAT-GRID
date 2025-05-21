/**
 * IEEE 30-bus Grid Results
 */
var IEEEResultsData = [
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
  function showIEEEResults() {
    ResultsViewer.showResults('IEEE 30-bus Grid Results', IEEEResultsData);
  }