import scrapy
import requests

class JobsSpider(scrapy.Spider):
    name = "jobs"
    start_urls = [
        "https://www.dice.com/jobs?q=Software&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.postedDate=ONE&filters.workplaceTypes=Remote&filters.employmentType=CONTRACTS&currencyCode=USD&language=en"
    ]

    def parse(self, response):
        job_cards = response.css('.job-card')  # Adjust based on the site's structure
        for job in job_cards:
            job_data = {
                'title': job.css('.job-title::text').get(),
                'company': job.css('.company-name::text').get(),
                'location': job.css('.job-location::text').get(),
                'posted_date': job.css('.posted-date::text').get(),
                }
            requests.post(
                "http://127.0.0.1:8000/jobs/create/",
                data=job_data
                )
            # Find the "next page" link and follow it
            next_page = response.css('a.next-page::attr(href)').get()
            if next_page:
                yield response.follow(next_page, self.parse)
