import {getIsoDate} from "./isoDate";

const sampleDates = [
	"2020-01-01",
	"2022-12-05",
	"2020-08-20",
]

test("Test IsoDate function", () => {
	sampleDates
		.forEach((date, i) => {
			expect(getIsoDate(new Date(date)))
				.toEqual(date)
		})
})
