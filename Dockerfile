FROM ubuntu


ENV SCALA_VERSION=2.13.8
ENV GATLING_VERSION=3.9.3

RUN apt-get update && \
    apt-get install -y openjdk-8-jre-headless wget
RUN wget -q https://downloads.typesafe.com/scala/$SCALA_VERSION/scala-$SCALA_VERSION.deb && \
    dpkg -i scala-$SCALA_VERSION.deb

# RUN wget -q https://repo1.maven.org/maven2/io/gatling/gatling-charts-highcharts-bundle/$GATLING_VERSION/gatling-charts-highcharts-bundle-$GATLING_VERSION-bundle.zip && \
#     unzip gatling-charts-highcharts-bundle-$GATLING_VERSION-bundle.zip -d /opt && \
#     rm gatling-charts-highcharts-bundle-$GATLING_VERSION-bundle.zip

ENV GATLING_HOME=/opt/gatling-charts-highcharts-bundle-$GATLING_VERSION
ENV PATH=$PATH:$GATLING_HOME/bin

WORKDIR /app
CMD ["bash"]
