import { BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import KeywordPillbox from "../../KeywordPillbox";
import { PictureMockup } from "../../PictureMockup";

import kkpgen_openapi from '../../../public/img/static/kkpgen/kkpgen-openapi.jpeg';
import kkpgen_enquiry from '../../../public/img/static/kkpgen/kkpgen-enquiry.jpg';
import kkpgen_presales from '../../../public/img/static/kkpgen/kkpgen-presales.jpeg';
import kkpgen_pdfgen from '../../../public/img/static/kkpgen/kkpgen-pdfgen.jpeg';
import kkpgen_quotationupd from '../../../public/img/static/kkpgen/kkpgen-quotationupd.jpeg';

export default function KKPGEN(props: React.ComponentPropsWithoutRef<"div">) {

  const scrollable = useRef<HTMLDivElement | null>(null);

  return <div {...props} className="break-after-avoid">

    <BlurbTitle>KKPGEN</BlurbTitle>
    <BlurbSubtitle>Maintaining a legacy bancassurance portal</BlurbSubtitle>

    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto lg:snap-x"}>
        <PictureMockup pic={kkpgen_openapi} renderWidth={400} />
        <PictureMockup pic={kkpgen_enquiry} renderWidth={400} />
        <PictureMockup pic={kkpgen_presales} renderWidth={400} />
        <PictureMockup pic={kkpgen_pdfgen} renderWidth={400} />
        <PictureMockup pic={kkpgen_quotationupd} renderWidth={400} />

      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>

    <KeywordPillbox keywords={[<strong>Java</strong>, <strong>Spring MVC</strong>, <strong>Spring Security</strong>, <strong>MapStruct</strong>, <strong>OpenAPI</strong>, <strong>AWS S3</strong>, 'JSP', 'Jasper Reports']} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>Added 10 new insurance products, 7 of which were targeted at high net worth individuals, to an insurance CRM portal. Refactored legacy code extensively, extracting crucial functionality such as premium calculation into a microservice where possible while avoiding regressions, and modifying JSP and JasperReports templates for sales illustrations (SIs).</p>

      <p>Demonstrated the effiacy of documentation-driven API design by writing <strong>OpenAPI</strong> specifications, and then using <strong>swagger-codegen</strong> to generate native language-specific clients seamlessly, such as during the <strong>maven</strong> build process, and server stubs for other teams. This greatly reduced the maintenance effort of CRM-to-bank API calls made during quotation creation or update which had complex (100+ fields), albeit reusable subschemas.</p>

      <p>Migrated several steps in the sales process of newer products to an external platform; the external platform would be issued a <strong>JWT</strong> upon POSTing the results back to the CRM portal with the transaction ID as a claim for future queries. Generated SIs, among other assets, were stored in <strong>S3</strong> and served directly to the end user with presigned links.</p>


    </article>
  </div>
}