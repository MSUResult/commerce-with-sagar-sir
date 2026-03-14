import CoursePreview from "@/component/(homepage)/CoursePreview";
import History from "@/component/(homepage)/History";
import Homepage from "@/component/(homepage)/Homepage";
import ImageContainer from "@/component/(homepage)/Image";
import ResultsPreview from "@/component/(homepage)/ResultsPreview";
import ReviewSlider from "@/component/(homepage)/ReviewSlider";
import WhyChooseUs from "@/component/(homepage)/WhyChoose";

export default function Home() {
  return (
    <>
      <Homepage />
      <ImageContainer />
      <History />
      <CoursePreview />
      <ResultsPreview />
      <ReviewSlider />
      <WhyChooseUs />
    </>
  );
}
