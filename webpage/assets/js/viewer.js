/**
 *  Results Viewer
 * A reusable module for displaying results in a modal overlay
 */

// Create a namespace to avoid global conflicts
var ResultsViewer = (function() {
    // Private variables
    var currentOverlay = null;
    
    // Create the overlay with custom content
    function createOverlay(title, items) {
      // Remove any existing overlay first
      if (currentOverlay) {
        document.body.removeChild(currentOverlay);
      }
      
      // Create overlay element
      var overlay = document.createElement('div');
      overlay.id = 'heatwave-results-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
      overlay.style.zIndex = '9999';
      overlay.style.overflowY = 'auto';
      overlay.style.display = 'block';
      
      // Create content container
      var content = document.createElement('div');
      content.id = 'heatwave-results-content';
      content.style.position = 'relative';
      content.style.maxWidth = '800px';
      content.style.margin = '40px auto';
      content.style.backgroundColor = '#fff';
      content.style.padding = '30px';
      content.style.borderRadius = '5px';
      content.style.fontFamily = 'inherit';
      
      // Create close button
      var closeBtn = document.createElement('div');
      closeBtn.id = 'heatwave-close-btn';
      closeBtn.innerHTML = '&times;';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '10px';
      closeBtn.style.right = '20px';
      closeBtn.style.fontSize = '30px';
      closeBtn.style.lineHeight = '1';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.color = '#333';
      closeBtn.style.width = '30px';
      closeBtn.style.height = '30px';
      closeBtn.style.textAlign = 'center';
      closeBtn.style.fontWeight = 'bold';
      closeBtn.onclick = function() { closeOverlay(); };
      
      // Create header
      var header = document.createElement('h2');
      header.textContent = title || 'Results Viewer';
      header.style.marginBottom = '20px';
      header.style.textAlign = 'center';
      header.style.color = '#333';
      header.style.fontSize = '1.75rem';
      
      // Create results container
      var resultsContainer = document.createElement('div');
      resultsContainer.id = 'heatwave-results-container';
      resultsContainer.style.display = 'flex';
      resultsContainer.style.flexDirection = 'column';
      resultsContainer.style.gap = '30px';
      
      // Add each item to the results container
      items.forEach(function(item) {
        var resultItem = document.createElement('div');
        resultItem.className = 'heatwave-result-item';
        resultItem.style.border = '1px solid #ddd';
        resultItem.style.borderRadius = '5px';
        resultItem.style.overflow = 'hidden';
        
        // Create image or color block
        if (item.imageUrl) {
          var image = document.createElement('img');
          image.src = item.imageUrl;
          image.alt = item.title || 'Result image';
          image.style.width = '100%';
          image.style.display = 'block';
          image.style.height = 'auto';
          resultItem.appendChild(image);
        } else {
          var imageContainer = document.createElement('div');
          imageContainer.style.backgroundColor = item.color || '#ff5500';
          imageContainer.style.height = '200px';
          imageContainer.style.display = 'flex';
          imageContainer.style.justifyContent = 'center';
          imageContainer.style.alignItems = 'center';
          imageContainer.style.color = 'white';
          imageContainer.style.fontWeight = 'bold';
          imageContainer.textContent = item.title || '';
          resultItem.appendChild(imageContainer);
        }
        
        // Add description if present
        if (item.description) {
          var descContainer = document.createElement('div');
          descContainer.style.padding = '15px';
          
          var description = document.createElement('p');
          description.textContent = item.description;
          description.style.margin = '0';
          description.style.color = '#333';
          
          descContainer.appendChild(description);
          resultItem.appendChild(descContainer);
        }
        
        resultsContainer.appendChild(resultItem);
      });
      
      // Add elements to the document
      content.appendChild(closeBtn);
      content.appendChild(header);
      content.appendChild(resultsContainer);
      overlay.appendChild(content);
      document.body.appendChild(overlay);
      
      // Store the current overlay
      currentOverlay = overlay;
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
      
      // Close when clicking outside the content
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          closeOverlay();
        }
      });
      
      // Add ESC key handler
      document.addEventListener('keydown', escKeyHandler);
      
      return overlay;
    }
    
    // Close the overlay
    function closeOverlay() {
      if (currentOverlay) {
        document.body.removeChild(currentOverlay);
        currentOverlay = null;
      }
      
      // Remove ESC key handler
      document.removeEventListener('keydown', escKeyHandler);
      
      // Restore body scrolling
      document.body.style.overflow = 'auto';
    }
    
    // Handler for ESC key
    function escKeyHandler(e) {
      if (e.key === 'Escape') {
        closeOverlay();
      }
    }
    
    // Public API
    return {
      // Show results with a custom title and items
      showResults: function(title, items) {
        return createOverlay(title, items);
      },
      
      // Close the current overlay
      closeResults: function() {
        closeOverlay();
      }
    };
  })();