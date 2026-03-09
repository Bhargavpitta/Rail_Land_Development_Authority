import "./StationDesignDrawings.css";

export default function StationDesignDrawings(){

const drawings = [

{
title:"Station Design Guidelines for Redevelopment of Railway Stations",
file:"/pdfs/station-design-guidelines.pdf"
},

{
title:"Standard Station Building Design Drawings",
file:"/pdfs/standard-station-building-design.pdf"
},

{
title:"Conceptual Station Redevelopment Design Framework",
file:"/pdfs/conceptual-station-redevelopment.pdf"
},

{
title:"Passenger Facilities Design Standards",
file:"/pdfs/passenger-facilities-design.pdf"
},

{
title:"Station Circulation and Access Planning Guidelines",
file:"/pdfs/station-circulation-guidelines.pdf"
},

{
title:"Station Commercial Development Layout Drawings",
file:"/pdfs/commercial-layout-drawings.pdf"
},

{
title:"Station Urban Integration Planning Guidelines",
file:"/pdfs/urban-integration-guidelines.pdf"
},

{
title:"Station Passenger Flow and Platform Connectivity Plans",
file:"/pdfs/passenger-flow-platform-connectivity.pdf"
},

{
title:"Multi Modal Integration Design Drawings",
file:"/pdfs/multimodal-integration.pdf"
},

{
title:"Standard Parking Layout for Station Areas",
file:"/pdfs/parking-layout-stations.pdf"
},

{
title:"Station Landscape and Public Space Design Drawings",
file:"/pdfs/landscape-public-space.pdf"
},

{
title:"Station Signage and Wayfinding Design Standards",
file:"/pdfs/signage-wayfinding-standards.pdf"
},

{
title:"Station Accessibility Design Guidelines",
file:"/pdfs/accessibility-design-guidelines.pdf"
},

{
title:"Station Fire Safety Layout Drawings",
file:"/pdfs/fire-safety-layout.pdf"
},

{
title:"Station Energy Efficiency and Sustainability Design",
file:"/pdfs/energy-efficiency-sustainability.pdf"
},

{
title:"Station Green Building Design Framework",
file:"/pdfs/green-building-framework.pdf"
},

{
title:"Station Passenger Amenities Layout Drawings",
file:"/pdfs/passenger-amenities-layout.pdf"
},

{
title:"Station Entry Plaza and Forecourt Design",
file:"/pdfs/entry-plaza-forecourt.pdf"
},

{
title:"Station Bus Terminal Integration Drawings",
file:"/pdfs/bus-terminal-integration.pdf"
},

{
title:"Station Redevelopment Concept Layout Plans",
file:"/pdfs/redevelopment-concept-layout.pdf"
}

];

return(

<div className="drawings-container">

<h2>Station Design Drawings</h2>

<p>
The following documents provide design standards, architectural drawings,
and planning frameworks for railway station redevelopment projects.
</p>

<ul className="drawing-list">

{drawings.map((doc,index)=>(

<li key={index}>

<a href={doc.file} target="_blank" rel="noopener noreferrer">

📄 {doc.title}

</a>

</li>

))}

</ul>

</div>

)

}