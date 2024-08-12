package computerdatabase
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.structure.ScenarioBuilder
import java.util.concurrent.ThreadLocalRandom
class MySimulation extends Simulation {

  // Define the HTTP protocol configuration
  val httpProtocol = http
    .baseUrl("https://cyntexa-3bc-dev-ed.develop.my.salesforce.com/services/data/v61.0/sobjects") // Change this to your API endpoint
    .acceptHeader("application/json") // Set the Accept header
    .contentTypeHeader("application/json") // Set the Content-Type header

  // Define the scenario .header("Authorization", "Bearer ${accessToken}"))
  val scn: ScenarioBuilder = scenario("My Scenario")
    .exec(
      http("Post JSON Request")
        .post("/Account") // Change this to your endpoint path
        .header("Authorization", "Bearer 00DdL000000E4FB!AQEAQPV827zqUaoy7xfCJYRk8fyK850z6kA7iXkN.YyY0fT1RjWE0XGAcfG_anCJ7Rf2vX2JXBUeskCXBKqIfos7TEyhe71B")
        .body(StringBody("""
          {
            "Name": "hsvkujks"
          }
        """)).asJson // Convert the body to JSON
        .check(status.is(201)) // Check for successful response
    )

  // Set up the simulation
  setUp(
    scn.inject(atOnceUsers(10)) // Inject 1 user at once
  ).protocols(httpProtocol)
}
