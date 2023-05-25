// Timeline data
const timelineData = [
    {
      date: "May 1, 2023",
      time: "10:00 AM",
      title: "Project A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "images/crown.jpg"
    },
    {
      date: "May 5, 2023",
      time: "2:30 PM",
      title: "Project B",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "images/srt.jpg"
    },
    // Add more timeline items as needed
  ];
  
  // Function to create a timeline item
  function createTimelineItem(item) {
    const timelineContainer = document.getElementById("timeline-container");
  
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");
  
    const timelineImage = document.createElement("img");
    timelineImage.src = item.image;
    timelineImage.alt = item.title;
    timelineItem.appendChild(timelineImage);
  
    const timelineContent = document.createElement("div");
    timelineContent.classList.add("timeline-content");
  
    const timelineDate = document.createElement("p");
    timelineDate.classList.add("timeline-date");
    timelineDate.textContent = `${item.date} at ${item.time}`;
    timelineContent.appendChild(timelineDate);
  
    const timelineTitle = document.createElement("h3");
    timelineTitle.classList.add("timeline-title");
    timelineTitle.textContent = item.title;
    timelineContent.appendChild(timelineTitle);
  
    const timelineDescription = document.createElement("p");
    timelineDescription.classList.add("timeline-description");
    timelineDescription.textContent = item.description;
    timelineContent.appendChild(timelineDescription);
  
    const readMoreButton = document.createElement("a");
    readMoreButton.classList.add("read-more");
    readMoreButton.href = "#";
    readMoreButton.textContent = "Read More";
    timelineContent.appendChild(readMoreButton);
  
    timelineItem.appendChild(timelineContent);
  
    timelineContainer.appendChild(timelineItem);
  }
  
  // Function to update the timeline section with data
  function updateTimeline() {
    // Clear existing timeline items
    const timelineContainer = document.getElementById("timeline-container");
    timelineContainer.innerHTML = "";
  
    // Create new timeline items based on the data
    timelineData.forEach(item => {
      createTimelineItem(item);
    });
  }
  
  // Call the updateTimeline function to initially populate the timeline section
  updateTimeline();
  