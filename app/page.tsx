import CoursePreview from "@/component/(homepage)/CoursePreview";
import History from "@/component/(homepage)/History";
import Homepage from "@/component/(homepage)/Homepage";
import ImageContainer from "@/component/(homepage)/Image";

export default function Home() {
  return (
    <>
      <Homepage />
      <ImageContainer />
      <History />
      <CoursePreview />
    </>
  );
}
