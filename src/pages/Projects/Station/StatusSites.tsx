import "./StatusSites.css";

export default function StatusSites() {

const stations = [
{sn:1,station:"Khandwa",zone:"Central",state:"Madhya Pradesh",mode:"EPC",agency:"CR",status:"DPR finalised by RLDA, awarded by Zonal Railway"},
{sn:2,station:"Kalyan",zone:"Central",state:"Maharashtra",mode:"PPP",agency:"-",status:"Master planning is in progress"},
{sn:3,station:"Thane",zone:"Central",state:"Maharashtra",mode:"EPC",agency:"RLDA",status:"Station to be taken up on EPC by RLDA"},
{sn:4,station:"Ajni (Nagpur)",zone:"Central",state:"Maharashtra",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded, under execution"},
{sn:5,station:"Dadar (CR)",zone:"Central + Western",state:"Maharashtra",mode:"PPP",agency:"-",status:"Master planning is in progress"},
{sn:6,station:"Mumbai CSMT",zone:"Central",state:"Maharashtra",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded, under execution"},
{sn:7,station:"Nagpur",zone:"Central",state:"Maharashtra",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded, under execution"},
{sn:8,station:"Visakhapatnam",zone:"East Coast",state:"Andhra Pradesh",mode:"EPC",agency:"ECOR",status:"DPR finalised by RLDA"},
{sn:9,station:"Bhubaneswar",zone:"East Coast",state:"Odisha",mode:"EPC",agency:"ECOR",status:"DPR finalised by RLDA"},
{sn:10,station:"Puri",zone:"East Coast",state:"Odisha",mode:"EPC",agency:"ECOR",status:"DPR finalised by RLDA"},
{sn:11,station:"Cuttack",zone:"East Coast",state:"Odisha",mode:"EPC",agency:"ECOR",status:"DPR finalised by RLDA"},
{sn:12,station:"Gaya",zone:"East Central",state:"Bihar",mode:"EPC",agency:"ECR",status:"DPR finalised by RLDA"},
{sn:13,station:"Bapudham Motihari",zone:"East Central",state:"Bihar",mode:"EPC",agency:"ECR",status:"DPR finalised by RLDA"},
{sn:14,station:"Darbhanga",zone:"East Central",state:"Bihar",mode:"EPC",agency:"ECR",status:"DPR finalised by RLDA"},
{sn:15,station:"Muzaffarpur",zone:"East Central",state:"Bihar",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded"},
{sn:16,station:"Sitamarhi",zone:"East Central",state:"Bihar",mode:"EPC",agency:"ECR",status:"DPR finalised by RLDA"},
{sn:17,station:"Hatia",zone:"Eastern",state:"Jharkhand",mode:"EPC",agency:"ER",status:"DPR finalised by RLDA"},
{sn:18,station:"Asansol",zone:"Eastern",state:"West Bengal",mode:"EPC",agency:"ER",status:"DPR finalised by RLDA"},
{sn:19,station:"Gomtinagar",zone:"North Eastern",state:"Uttar Pradesh",mode:"EPC",agency:"RLDA",status:"Completed and Commissioned"},
{sn:20,station:"New Jalpaiguri",zone:"North East Frontier",state:"West Bengal",mode:"EPC",agency:"NEFR",status:"DPR finalised by RLDA"},

{sn:21,station:"Chandigarh",zone:"Northern",state:"Chandigarh",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded"},
{sn:22,station:"Anand Vihar",zone:"Northern",state:"Delhi",mode:"PPP",agency:"-",status:"Master planning in progress"},
{sn:23,station:"Bijwasan",zone:"Northern",state:"Delhi",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded"},
{sn:24,station:"Delhi Cantt",zone:"Northern",state:"Delhi",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded"},
{sn:25,station:"Delhi Safdarjung",zone:"Northern",state:"Delhi",mode:"EPC",agency:"RLDA",status:"EPC Tender awarded"},
{sn:26,station:"Faridabad",zone:"Northern",state:"Haryana",mode:"EPC",agency:"NR",status:"DPR finalised"},
{sn:27,station:"Ghaziabad",zone:"Northern",state:"Uttar Pradesh",mode:"EPC",agency:"NR",status:"DPR finalised"},
{sn:28,station:"Jalandhar Cantt",zone:"Northern",state:"Punjab",mode:"EPC",agency:"NR",status:"DPR finalised"},
{sn:29,station:"Jammu Tawi",zone:"Northern",state:"J&K",mode:"EPC",agency:"NR",status:"DPR finalised"},
{sn:30,station:"Ludhiana",zone:"Northern",state:"Punjab",mode:"EPC",agency:"NR",status:"DPR finalised"},

{sn:31,station:"Delhi Junction",zone:"Northern",state:"Delhi",mode:"PPP",agency:"-",status:"Master planning in progress"},
{sn:32,station:"Delhi Sarai Rohilla",zone:"Northern",state:"Delhi",mode:"EPC",agency:"NR",status:"Master planning in progress"},
{sn:33,station:"New Delhi",zone:"Northern",state:"Delhi",mode:"EPC",agency:"RLDA",status:"Tender awarded"},
{sn:34,station:"Ambala Cantt",zone:"Northern",state:"Haryana",mode:"EPC",agency:"NR",status:"Master planning in progress"},
{sn:35,station:"Hazrat Nizamuddin",zone:"Northern",state:"Delhi",mode:"PPP",agency:"-",status:"Master planning in progress"},
{sn:36,station:"Gurgaon",zone:"Northern",state:"Haryana",mode:"EPC",agency:"RLDA",status:"Tender awarded"},
{sn:37,station:"Charbagh (Lucknow)",zone:"Northern",state:"Uttar Pradesh",mode:"EPC",agency:"RLDA",status:"Tender awarded"},
{sn:38,station:"Udaipur City",zone:"North Western",state:"Rajasthan",mode:"EPC",agency:"NWR",status:"DPR finalised"},
{sn:39,station:"Gandhinagar (Jaipur)",zone:"North Western",state:"Rajasthan",mode:"EPC",agency:"NWR",status:"DPR finalised"},
{sn:40,station:"Jaipur",zone:"North Western",state:"Rajasthan",mode:"EPC",agency:"NWR",status:"DPR finalised"},

{sn:41,station:"Jaisalmer",zone:"North Western",state:"Rajasthan",mode:"EPC",agency:"NWR",status:"DPR finalised"},
{sn:42,station:"Jodhpur",zone:"North Western",state:"Rajasthan",mode:"EPC",agency:"NWR",status:"DPR finalised"},
{sn:43,station:"Gwalior",zone:"North Central",state:"Madhya Pradesh",mode:"EPC",agency:"NCR",status:"DPR finalised"},
{sn:44,station:"Kanpur Central",zone:"North Central",state:"Uttar Pradesh",mode:"EPC",agency:"NCR",status:"DPR finalised"},
{sn:45,station:"Prayagraj",zone:"North Central",state:"Uttar Pradesh",mode:"EPC",agency:"NCR",status:"DPR finalised"},
{sn:46,station:"Nellore",zone:"South Central",state:"Andhra Pradesh",mode:"EPC",agency:"SCR",status:"DPR finalised"},
{sn:47,station:"Secunderabad",zone:"South Central",state:"Telangana",mode:"EPC",agency:"SCR",status:"DPR finalised"},
{sn:48,station:"Tirupati",zone:"South Central",state:"Andhra Pradesh",mode:"EPC",agency:"SCR",status:"DPR finalised"},
{sn:49,station:"Hyderabad",zone:"South Central",state:"Telangana",mode:"EPC",agency:"SCR",status:"DPR finalised"},
{sn:50,station:"Renigunta",zone:"South Central",state:"Andhra Pradesh",mode:"EPC",agency:"SCR",status:"Handed over to Zonal Railway"},

{sn:51,station:"Vijayawada",zone:"South Central",state:"Andhra Pradesh",mode:"PPP",agency:"SCR",status:"Tender Invited"},
{sn:52,station:"Aurangabad",zone:"South Central",state:"Maharashtra",mode:"EPC",agency:"SCR",status:"DPR finalised"},
{sn:53,station:"Jalna",zone:"South Central",state:"Maharashtra",mode:"EPC",agency:"SCR",status:"DPR finalised"},
{sn:54,station:"Ranchi",zone:"South Eastern",state:"Jharkhand",mode:"EPC",agency:"SER",status:"DPR finalised"},
{sn:55,station:"Ernakulam Jn",zone:"Southern",state:"Kerala",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:56,station:"Ernakulam Town",zone:"Southern",state:"Kerala",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:57,station:"Kanyakumari",zone:"Southern",state:"Tamil Nadu",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:58,station:"Kollam",zone:"Southern",state:"Kerala",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:59,station:"Katpadi",zone:"Southern",state:"Tamil Nadu",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:60,station:"Madurai",zone:"Southern",state:"Tamil Nadu",mode:"EPC",agency:"SR",status:"DPR finalised"},

{sn:61,station:"Puducherry",zone:"Southern",state:"Puducherry",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:62,station:"Rameshwaram",zone:"Southern",state:"Tamil Nadu",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:63,station:"Mangalore Central",zone:"Southern",state:"Karnataka",mode:"EPC",agency:"-",status:"Master planning in progress"},
{sn:64,station:"Kozhikode",zone:"Southern",state:"Kerala",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:65,station:"Thiruvananthapuram",zone:"Southern",state:"Kerala",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:66,station:"Varkala",zone:"Southern",state:"Kerala",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:67,station:"Chennai Central",zone:"Southern",state:"Tamil Nadu",mode:"PPP",agency:"-",status:"Master planning in progress"},
{sn:68,station:"Chennai Egmore",zone:"Southern",state:"Tamil Nadu",mode:"EPC",agency:"SR",status:"DPR finalised"},
{sn:69,station:"Coimbatore",zone:"Southern",state:"Tamil Nadu",mode:"PPP",agency:"SR",status:"Tender inviting process"},
{sn:70,station:"Tambaram",zone:"Southern",state:"Tamil Nadu",mode:"PPP",agency:"-",status:"Master planning in progress"},

{sn:71,station:"Avadi",zone:"Southern",state:"Tamil Nadu",mode:"PPP",agency:"-",status:"Master planning in progress"},
{sn:72,station:"Bangalore Cantt",zone:"South Western",state:"Karnataka",mode:"EPC",agency:"SWR",status:"DPR finalised"},
{sn:73,station:"Yesvantpur",zone:"South Western",state:"Karnataka",mode:"EPC",agency:"SWR",status:"DPR finalised"},
{sn:74,station:"Bangalore City",zone:"South Western",state:"Karnataka",mode:"PPP",agency:"-",status:"Master planning in progress"},
{sn:75,station:"New Bhuj",zone:"Western",state:"Gujarat",mode:"EPC",agency:"WR",status:"DPR finalised"},
{sn:76,station:"Udhna",zone:"Western",state:"Gujarat",mode:"EPC",agency:"WR",status:"DPR finalised"},
{sn:77,station:"Rani Kamalapati",zone:"West Central",state:"Madhya Pradesh",mode:"PPP",agency:"RLDA",status:"Completed and Commissioned"},
{sn:78,station:"Dakaniya Talav",zone:"West Central",state:"Rajasthan",mode:"EPC",agency:"WCR",status:"DPR finalised"},
{sn:79,station:"Kota",zone:"West Central",state:"Rajasthan",mode:"EPC",agency:"WCR",status:"DPR finalised"},
{sn:80,station:"Ahmedabad",zone:"Western",state:"Gujarat",mode:"EPC",agency:"RLDA",status:"Tender awarded"},

{sn:81,station:"Gandhinagar Capital",zone:"Western",state:"Gujarat",mode:"EPC",agency:"RLDA",status:"Completed and Commissioned"},
{sn:82,station:"Somnath",zone:"Western",state:"Gujarat",mode:"EPC",agency:"WR",status:"DPR finalised"},
{sn:83,station:"Surat",zone:"Western",state:"Gujarat",mode:"EPC",agency:"SITCO/RLDA",status:"Tender awarded"},
{sn:84,station:"Sabarmati",zone:"Western",state:"Gujarat",mode:"EPC",agency:"WR",status:"DPR finalised"},
{sn:85,station:"Indore",zone:"Western",state:"Madhya Pradesh",mode:"EPC",agency:"WR",status:"Tender inviting process"},
{sn:86,station:"Borivali",zone:"Western",state:"Maharashtra",mode:"EPC",agency:"WR",status:"Master planning in progress"},
{sn:87,station:"Andheri",zone:"Western",state:"Maharashtra",mode:"PPP",agency:"-",status:"Master planning in progress"},
{sn:88,station:"Mumbai Central",zone:"Western",state:"Maharashtra",mode:"EPC",agency:"WR",status:"Master planning in progress"},
{sn:89,station:"Bandra Terminus",zone:"Western",state:"Maharashtra",mode:"EPC",agency:"RLDA",status:"Master planning in progress"},
{sn:90,station:"Bhopal",zone:"WCR",state:"Madhya Pradesh",mode:"PPP",agency:"RLDA",status:"Master planning in progress"},
{sn:91,station:"Vadodara",zone:"WR",state:"Gujarat",mode:"PPP",agency:"RLDA",status:"Master planning in progress"}
];

return(

<div className="status-container">

<h2>Status of Station Development Sites</h2>

<p>This page displays the current status of railway station redevelopment projects undertaken by RLDA.</p>

<div className="table-wrapper">

<table className="status-table">

<thead>
<tr>
<th>Sn</th>
<th>Station</th>
<th>Railway (Zone)</th>
<th>State / UT</th>
<th>Mode of Tender</th>
<th>Executing Agency</th>
<th>Status / Remarks</th>
</tr>
</thead>

<tbody>
{stations.map((s)=>(
<tr key={s.sn}>
<td>{s.sn}</td>
<td>{s.station}</td>
<td>{s.zone}</td>
<td>{s.state}</td>
<td>{s.mode}</td>
<td>{s.agency}</td>
<td>{s.status}</td>
</tr>
))}
</tbody>

</table>

</div>

</div>
)

}
