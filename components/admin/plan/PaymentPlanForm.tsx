import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

const paymentPlanSchema = z.object({
  name: z.string().min(1, "Name is required"),
  interval: z.string().min(1, "Interval is required"),
  currency: z.string().min(1, "Currency is required"),
  basePrice: z
    .string()
    .min(1, "Base price is required")
    .regex(/^\d+$/, "Must be a valid number"),
  description: z.string().min(1, "Description is required"),
  costPerProvider: z
    .string()
    .min(1, "Cost per provider is required")
    .regex(/^\d+$/, "Must be a valid number"),
  maxProviders: z
    .string()
    .min(1, "Maximum providers is required")
    .regex(/^\d+$/, "Must be a valid number"),
  maxPatients: z
    .string()
    .min(1, "Maximum patients is required")
    .regex(/^\d+$/, "Must be a valid number"),
  minPatients: z
    .string()
    .min(1, "Minimum patients is required")
    .regex(/^\d+$/, "Must be a valid number"),
  costPerPatient: z
    .string()
    .min(1, "Cost per patient is required")
    .regex(/^\d+$/, "Must be a valid number"),
});

const PaymentPlanForm = () => {
  type PaymentPlanForm = z.infer<typeof paymentPlanSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentPlanForm>({
    resolver: zodResolver(paymentPlanSchema),
    defaultValues: {
      name: "Basic",
      interval: "Month",
      currency: "USD",
      basePrice: "250",
      description:
        "Includes 1 clinician\n& 50 patients with a limit of 1000 patients\n+250/mo per clinical +$ 40/mo per 50 patients",
      costPerProvider: "290",
      maxProviders: "10",
      maxPatients: "1000",
      minPatients: "50",
      costPerPatient: "40",
    },
  });

  const onSubmit = (data: PaymentPlanForm) => {
    console.log("Validated data:", data);
  };

  return (
    <div className="bg-white px-6">
      <Card className="mx-auto max-w-[1200px] shadow-none">
        <CardBody className="px-24 py-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 ">
                  <Typography
                    className="font-gilroy-bold !text-head-20 font-normal text-[#1E1E1E]"
                    variant="h4"
                    color="blue-gray"
                  >
                    Edit Payment
                  </Typography>
                  <Typography
                    className="font-gilroy-bold !text-head-20 font-normal text-[#828282]"
                    variant="h4"
                    color="gray"
                  >
                    Plan
                  </Typography>
                </div>
              </div>
              <div className="flex items-center justify-between w-[288px]">
                <div className="!w-[135px] flex flex-col">
                  <Typography
                    variant="small"
                    className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                  >
                    Name <span className="text-red-500">*</span>
                  </Typography>
                  <Input
                    {...register("name")}
                    error={!!errors.name}
                    className="!w-[135px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.name && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.name.message}
                    </Typography>
                  )}
                </div>

                <div className="!w-[135px] flex flex-col">
                  <Typography
                    variant="small"
                    className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                  >
                    Interval <span className="text-red-500">*</span>
                  </Typography>
                  <Input
                    {...register("interval")}
                    error={!!errors.interval}
                    className="!w-[135px]  !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.interval && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.interval.message}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Currency <span className="text-red-500">*</span>
                </Typography>
                <Input
                  {...register("currency")}
                  error={!!errors.currency}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.currency && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.currency.message}
                  </Typography>
                )}
              </div>

              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Base price per month <span className="text-red-500">*</span>
                </Typography>
                <Input
                  {...register("basePrice")}
                  error={!!errors.basePrice}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.basePrice && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.basePrice.message}
                  </Typography>
                )}
              </div>

              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Description <span className="text-red-500">*</span>
                </Typography>
                <Textarea
                  {...register("description")}
                  error={!!errors.description}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] min-h-[120px]"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.description && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.description.message}
                  </Typography>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-1 mb-6">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="font-gilroy-bold !text-head-20 font-normal text-[#1E1E1E]"
                >
                  Unlimited
                </Typography>
                <Typography
                  variant="h4"
                  color="gray"
                  className="font-gilroy-bold !text-head-20 font-normal text-[##8A8A8A]"
                >
                  Plan
                </Typography>
              </div>

              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Cost per provider per month{" "}
                  <span className="text-red-500">*</span>
                </Typography>
                <Input
                  {...register("costPerProvider")}
                  error={!!errors.costPerProvider}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.costPerProvider && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.costPerProvider.message}
                  </Typography>
                )}
              </div>

              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Maximum no of providers supported{" "}
                  <span className="text-red-500">*</span>
                </Typography>
                <Input
                  {...register("maxProviders")}
                  error={!!errors.maxProviders}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.maxProviders && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.maxProviders.message}
                  </Typography>
                )}
              </div>

              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Maximum no of patients supported{" "}
                  <span className="text-red-500">*</span>
                </Typography>
                <Input
                  {...register("maxPatients")}
                  error={!!errors.maxPatients}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.maxPatients && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.maxPatients.message}
                  </Typography>
                )}
              </div>

              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Minimum no of patients <span className="text-red-500">*</span>
                </Typography>
                <Input
                  {...register("minPatients")}
                  error={!!errors.minPatients}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.minPatients && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.minPatients.message}
                  </Typography>
                )}
              </div>

              <div className="w-[288px]">
                <Typography
                  variant="small"
                  className="font-gilroy-semi-bold mb-2 font-normal text-[#1E1E1E]"
                >
                  Cost per minimum patient per month{" "}
                  <span className="text-red-500">*</span>
                </Typography>
                <Input
                  {...register("costPerPatient")}
                  error={!!errors.costPerPatient}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.costPerPatient && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.costPerPatient.message}
                  </Typography>
                )}
              </div>
            </div>

            <div className="col-span-1 w-[280px]">
              <Button
                type="submit"
                className="w-full bg-primary rounded-full"
                size="lg"
              >
                Create Plan
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default PaymentPlanForm;
