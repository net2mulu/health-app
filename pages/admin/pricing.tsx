import { pricingPlans } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CheckIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.8333 13C23.8333 18.983 18.983 23.8333 13 23.8333C7.0169 23.8333 2.16666 18.983 2.16666 13C2.16666 7.01687 7.0169 2.16663 13 2.16663C18.983 2.16663 23.8333 7.01687 23.8333 13ZM17.3661 9.7171C17.6835 10.0344 17.6835 10.5489 17.3661 10.8661L11.9495 16.2828C11.6322 16.6001 11.1178 16.6001 10.8005 16.2828L8.6338 14.1161C8.3165 13.7988 8.3165 13.2844 8.6338 12.9671C8.9511 12.6498 9.46555 12.6498 9.78285 12.9671L11.375 14.5592L13.796 12.1382L16.2172 9.7171C16.5345 9.3998 17.0488 9.3998 17.3661 9.7171Z"
        fill="#5DBA47"
      />
    </svg>
  );
};

export default function Pricing() {
  return (
    <div className="w-full  my-4 p-4  mx-auto ">
      <div className="text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="font-gilroy-bold mb-2 text-3xl"
        >
          Pricing Plans
        </Typography>
        <Typography
          variant="lead"
          className="text-mediumGray text-sm max-w-[372px] mx-auto"
        >
          Simple, Transparent pricing for your ProductName system needs
        </Typography>
      </div>

      <div className="grid gap-8 mt-16 lg:grid-cols-3 mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`shadow-none rounded-[41px] h-max relative mt-6 px-4 mx-12 ${
              plan.isRecommended ? "border-2 border-gray-300 mt-20" : ""
            }`}
          >
            <CardHeader
              floated={false}
              className="shadow-none text-start  bg-white h-auto px-2 pt-8"
            >
              {plan.isRecommended && (
                <Typography variant="small" className="text-lime">
                  Recommended
                </Typography>
              )}
              <Typography
                variant="h5"
                className="text-[#1E1E1E] font-normal font-gilroy-bold text-2xl"
              >
                {plan.name}
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography
                variant="paragraph"
                color="gray"
                className="mb-6 text-sm font-normal font-gilroy-semi-bold text-mediumGray max-w-[238px] text-start"
              >
                {plan.description}
              </Typography>
              <div className="flex items-center justify-start gap-2 mt-2">
                <Typography
                  variant="h3"
                  className="font-gilroy-bold text-[#1E1E1E] text-[48px] font-normal"
                >
                  ${plan.price}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="ml-1 font-gilroy-semi-bold text-head-16
                   font-normal"
                >
                  /Monthly
                </Typography>
              </div>
              {!plan.isRecommended && (
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <Typography
                        color="gray"
                        className="font-normal font-gilroy-semi-bold text-mediumGray text-sm"
                      >
                        {feature.text}
                      </Typography>
                    </li>
                  ))}
                </ul>
              )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                fullWidth
                className={`${
                  plan.isRecommended
                    ? "text-white bg-lime "
                    : "bg-white text-lime border border-gray-300"
                } rounded-full capitalize  py-4 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100`}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
