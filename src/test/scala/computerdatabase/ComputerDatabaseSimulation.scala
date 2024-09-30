package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scala.util.Random // Import the Random class

class MySimulation extends Simulation {

  // Define the HTTP protocol configuration
  val httpProtocol = http
    .baseUrl("https://keellssuper--keellsqa.sandbox.my.salesforce.com/services/data/v60.0/loyalty-programs/KeellsLoyaltyProgram")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  val scn: ScenarioBuilder = scenario("My Scenario")
    .exec(session => {
      // Generate a unique externalOrderId using Random
      val uniqueId = Random.between(999989911111L, 999989999999L).toString // Convert to String
      session.set("c", uniqueId) // Set the unique ID in the session
    })
    .exec(
      http("Post JSON Request")
        .post("/individual-member-enrollments")
        .header("Authorization", "Bearer 00DHy000000YsOV!AQEAQL9aZLyEtRpoWA5yMdWZhE_I53zKRPVTAzfP8rcODSQ3fF6ErtIx2_uaGqF.0mzxuhwfACXq0kk.th2hhWDP4XLPofMt") // Use a secure way to handle tokens
        .body(StringBody(session => {
          val c = session("c").as[String] // Get the unique ID as String
          s"""{
  "memberStatus": "Active",
  "enrollmentDate": "2024-09-25T00:00:00",
  "membershipNumber": "MembershipNumberq",
  "associatedContactDetails": {
    "firstName": "Joh",
    "lastName": "Keels"
  },
  "additionalMemberFieldValues": {
    "attributes": {
       "CYN_FirstName__c": "Lanni",
       "CYN_LastName__c": "Halbard",
       "CYN_IdentityDocumentType__c": "NIC",
       "CYN_UniqueIdentificationNumber__c": "$c",
       "CYN_MobileNumber__c": "0772211111",
       "CYN_Gender__c": "Male",
       "CYN_Email__c": "abckeells1@gmai.com",
       "CYN_AgreeingtoTermsAndConditions__c": true,
       "CYN_BirthDate__c": "2002-01-01T00:00:00",
       "CYN_EnrolledChannel__c": "Website",
       "CYN_CPWhatsapp__c": false,
       "CYN_CPEmail__c": true,
       "CYN_CPFacebook__c": false,
       "CYN_CPSMS__c": false,
       "CYN_BPPrintedBill__c": true,
       "CYN_BPEBill__c": false,
       "CYN_BPSMSBill__c": false
    }
  }
}"""
        })).asJson
        .check(status.is(200), bodyString.saveAs("responseBody"))
    )
    .exec { session =>
      println(s"Generated externalOrderId: ${session("c").as[String]}") // Log the UUID
      println(session("responseBody").as[String]) // Log the response
      session
    }
    .exec { session =>
      val requestBody = s"""[{
        "memberidentifier": "241593424493930",
        "externalOrderId": "${session("c").as[String]}"
      }]"""
      println(s"Request Body: $requestBody")
      session
    }

  setUp(
    scn.inject(atOnceUsers(10))
  ).protocols(httpProtocol)
}
