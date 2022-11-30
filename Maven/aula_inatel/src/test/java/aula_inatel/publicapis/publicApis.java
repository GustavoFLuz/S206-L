package aula_inatel.publicapis;

import com.intuit.karate.junit5.Karate;

class publicApis {
    
    
    @Karate.Test
    Karate testPublicApis() {
        return Karate.run("publicApis").relativeTo(getClass());
    }    

}