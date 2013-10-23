package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {
  
    public static Result index() {
        return ok(index.render("TecnoTalks - Um ecossistema sustentável"));
    		//return ok(index.render("Principal"));
	}
  
}
