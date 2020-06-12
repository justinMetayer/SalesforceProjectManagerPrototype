({
	setProjecTaskList : function(component, event, helper) {
		var action = component.get("c.getProjectTaskClosed");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.projectTasks", response.getReturnValue());
            }
            
            //console.log(state);
            //console.log(response.getReturnValue());
            //console.log(component.get("v.projectTasks"));
        });
		$A.enqueueAction(action);
	}
})