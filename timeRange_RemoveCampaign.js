// this is the time range filter based on date/hour to date/hour - for example, July 1st 9:30AM through July 7th 11:59PM
// the addshopRemoveCampaignFromList function will remove the campaign from the stack when the time expires
// this goes inside the addshopExtInitialLoad function

// Time Range
var addTimeRangeStart = new Date('07/01/2018 9:30:00').getTime(); //start time
var addTimeRangeEnd = new Date('07/07/2018 23:59:00').getTime(); //end time
var addTimeRangeCurrentTime = new Date().getTime(); //current time

if (Math.min(addTimeRangeStart, addTimeRangeEnd) <= addTimeRangeCurrentTime && Math.max(addTimeRangeStart, addTimeRangeEnd) >= addTimeRangeCurrentTime) {
    console.log("inside range!"); //in between timeframe
} else {
    console.log("outside range!"); //outside timeframe
    addshopRemoveCampaignFromList("XXX");
}

function addshopRemoveCampaignFromList(campaignID){
	//remove from main list
	var index = AddShopPortal.info.addshop_v2_campaigns.indexOf(campaignID);
	if (index > -1) {
	    AddShopPortal.info.addshop_v2_campaigns.splice(index, 1);
	}
	//remove from viewed
	var index = AddShopPortal.info.addshop_v2_campaigns_viewed.indexOf(campaignID);
	if (index > -1) {
	    AddShopPortal.info.addshop_v2_campaigns_viewed.splice(index, 1);
	}
}
