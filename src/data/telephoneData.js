const telephoneData = [
    {
        section: "VC & Members",
        rows: [
            { sn: 1, name: "Sh. Manoj Garg", designation: "Vice Chairman", phone: "23233518", ext: "101", email: "vc@rlda.railnet.gov.in" },
            { sn: 2, name: "Sh. Rabindra Nath Mishra", designation: "Member/Revenue", phone: "23232854/35", ext: "102", email: "mf@rlda.railnet.gov.in" },
            { sn: 3, name: "Sh. Anand Singh", designation: "Member/Projects", phone: "23232854/35", ext: "103", email: "mprojects@rlda.railnet.gov.in" },
            { sn: 4, name: "Sh. Mudit Chandra", designation: "Member/BD", phone: "23232854/35", ext: "104", email: "memberbd@rlda.railnet.gov.in" },
            { sn: 5, name: "Vacant", designation: "Member/Planning", phone: "23232854/35", ext: "105", email: "mplanning@rlda.railnet.gov.in" },
            { sn: 6, name: "Vacant -Being L/A By JGM/P-5", designation: "Secretary", phone: "23232854/35", ext: "212", email: "secy@rlda.railnet.gov.in" }
        ]
    },

    {
        section: "Executive Directors",
        rows: [
            { sn: 7, name: "Sh. Anand Singh", designation: "ED/Projects", phone: "(-)", ext: "208", email: "edprojects@rlda.railnet.gov.in" },
            { sn: 8, name: "Sh. Sanjay Kumar Bhagat", designation: "ED/SDP", phone: "(-)", ext: "111", email: "edsdprojects@rlda.railnet.gov.in" },
            { sn: 9, name: "Sh. Ramanand Bhagat", designation: "ED/Finance", phone: "(-)", ext: "209", email: "edfinance@rlda.railnet.gov.in" }
        ]
    },

    {
        section: "GM's / CPM's",
        rows: [
            { sn: 10, name: "Sh. Apurva Agnihotri", designation: "GM/Security & IT", phone: "(-)", ext: "112", email: "gmitmv@rlda.railnet.gov.in" },
            { sn: 11, name: "Sh. Sanjay Kumar Yadav", designation: "GM/Tender", phone: "(-)", ext: "110", email: "gmtender@rlda.railnet.gov.in" },
            { sn: 12, name: "Sh. Om Prakash Yadav", designation: "GM/Finance", phone: "(-)", ext: "118", email: "jgmfin@rlda.railnet.gov.in" },
            { sn: 13, name: "Sh. Awadhesh Kumar", designation: "GM/Electrical", phone: "(-)", ext: "244", email: "gmelectrical@rlda.railnet.gov.in" },
            { sn: 14, name: "Sh. Atul Kumar Verma", designation: "GM/Design", phone: "(-)", ext: "251", email: "gmdesign@rlda.railnet.gov.in" },
            { sn: 15, name: "Ms. Shashi Kanchan", designation: "GM/System", phone: "(-)", ext: "213", email: "gmsystem@rlda.railnet.gov.in" },
            { sn: 16, name: "Sh. Abhay Kumar", designation: "GM/SP", phone: "(-)", ext: "113", email: "(-)" },
            { sn: 17, name: "Sh. Alok Kumar Mishra", designation: "CVO", phone: "47844552", ext: "(-)", email: "alokkumar.mishra@gov.in" },
            { sn: 18, name: "Sh. Dinesh Kumar Singh", designation: "CPM/ND-1", phone: "(-)", ext: "249", email: "cpmdelhi@rlda.railnet.gov.in" },
            { sn: 19, name: "Sh. Sushil Kumar Yadava", designation: "CPM/ND-2", phone: "(-)", ext: "247", email: "cpmnd2@rlda.railnet.gov.in" },
            { sn: 20, name: "Sh. Gaurav", designation: "CPM/ND-3", phone: "(-)", ext: "117", email: "cpm3dli@rlda.railnet.gov.in" },
            { sn: 21, name: "Sh. Mohit Kumar", designation: "CPM/ND-4", phone: "(-)", ext: "114", email: "(-)" }
        ]
    },

    {
        section: "JGM's",
        rows: [
            { sn: 22, name: "Vacant", designation: "JGM/Fin/NDLS", phone: "(-)", ext: "115", email: "jgmfndls@rlda.railnet.gov.in" },
            { sn: 23, name: "Sh. Prabhat Kamal Pawan", designation: "JGM/Project", phone: "(-)", ext: "239", email: "(-)" },
            { sn: 24, name: "Sh. J. C. Laamba", designation: "JGM/Project-3", phone: "(-)", ext: "220", email: "dgm_p3@rlda.railnet.gov.in" },
            { sn: 25, name: "Sh. Rahul Singhal", designation: "JGM/Project-5", phone: "(-)", ext: "212", email: "jgmproj5@rlda.railnet.gov.in" },
            { sn: 26, name: "Vacant -Being L/A By JGM/P-5", designation: "JGM/Architect", phone: "(-)", ext: "212", email: "jgmarch@rlda.railnet.gov.in" },
            { sn: 27, name: "Vacant", designation: "JGM/Electrical", phone: "(-)", ext: "246", email: "jgmelec@rlda.railnet.gov.in" },
            { sn: 28, name: "Sh. Rahul Verma", designation: "JGM/Project/Delhi", phone: "(-)", ext: "128", email: "jgmproject@rlda.railnet.gov.in" },
            { sn: 29, name: "Sh. O. P. Deshwal", designation: "JGM/Projects", phone: "(-)", ext: "252", email: "dgmpdli2@rlda.railnet.gov.in" },
            { sn: 30, name: "Ms. Sudha Venkata Varadhan", designation: "OSD (Company Affairs)", phone: "(-)", ext: "106", email: "(-)" }
        ]
    },

    {
        section: "DGM's",
        rows: [
            { sn: 31, name: "Sh. R. S. Sajwan", designation: "DGM/HR", phone: "(-)", ext: "211", email: "dgmhrd@rlda.railnet.gov.in" },
            { sn: 32, name: "Vacant", designation: "DGM/Law", phone: "(-)", ext: "(-)", email: "dgmlaw@rlda.railnet.gov.in" },
            { sn: 33, name: "Sh. Naresh Bisht", designation: "DGM/F&A", phone: "(-)", ext: "129", email: "dgmfin@rlda.railnet.gov.in" },
            { sn: 34, name: "Sh. Abhishek Mehta", designation: "DGM/BD", phone: "(-)", ext: "217", email: "(-)" },
            { sn: 35, name: "Sh. Ritesh Agrawal", designation: "DGM/Civil/Delhi", phone: "(-)", ext: "237", email: "dgmndls@rlda.railnet.gov.in" },
            { sn: 36, name: "Sh. Satish Kumar", designation: "DGM/Project/SD", phone: "(-)", ext: "248", email: "dgmpsd@rlda.railnet.gov.in" },
            { sn: 37, name: "Sh. P. P. Pathak", designation: "DGM/SD", phone: "(-)", ext: "245", email: "dgm.sd@rlda.railnet.gov.in" },
            { sn: 38, name: "Sh. Arman Singh Patel", designation: "DGM/Civil/DLI", phone: "(-)", ext: "242", email: "(-)" }
        ]
    }
];

export default telephoneData;