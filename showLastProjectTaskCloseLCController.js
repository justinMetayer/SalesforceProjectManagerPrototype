({
	doInit : function(component, event, helper) {
		helper.setProjecTaskList(component, event, helper);
	},
    changeCardBody : function(component, event, helper) {
    	var buttonUp = component.find('downCardBody');
        var buttonDown = component.find('upCardBody');
        var cardDisplay = component.find('cardProjectTask');
        
        var haveClass = $A.util.hasClass(cardDisplay, "cardDisplayNone");
        
        if(haveClass){
            $A.util.removeClass(buttonUp, "cardDisplayNone");
            $A.util.addClass(buttonDown, "cardDisplayNone");
            
            
            $A.util.removeClass(cardDisplay, "cardDisplayNone"); 
        }else{
            $A.util.addClass(buttonUp, "cardDisplayNone");
            $A.util.removeClass(buttonDown, "cardDisplayNone");

            $A.util.addClass(cardDisplay, "cardDisplayNone");
        }
    },
    navigateToRecord : function(component, event, helper) {
        var redirectEvent = $A.get("e.force:navigateToSObject");
        if(redirectEvent){
        var recordId = event.currentTarget.dataset.recordid
            if(recordId != null){
                redirectEvent.setParams({
                  "recordId": recordId,
                  "slideDevName": "related"
                });
                redirectEvent.fire();
            }else{
                console.log("recordId not found !");
            }
        }else{
            console.log("redirect event failed !");
        }
    }
})