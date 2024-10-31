import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const paymentPlanSchema = z.object({
  host: z.string().min(1, "db host is required"),
  number: z.string().min(1, "number of patients is required"),
  db_host: z.string().min(1, "db host is required"),
  port: z.string().min(1, "db port is required"),
  username: z.string().min(1, "db username is required"),
  db_name: z.string().min(1, "db name is required"),
  db_pass: z.string().min(1, "db password is required"),
});

const PatientDetailForm = () => {
  type PaymentPlanForm = z.infer<typeof paymentPlanSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentPlanForm>({
    resolver: zodResolver(paymentPlanSchema),
    defaultValues: {},
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
            className="flex justify-center items-center "
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="flex gap-1 ">
                  <Typography
                    className="font-gilroy-bold !text-head-20 font-normal text-[#1E1E1E]"
                    variant="h4"
                    color="blue-gray"
                  >
                    Patient portal details
                  </Typography>
                </div>
              </div>
              <div className="w-[288px]">
                <Input
                  placeholder="Host"
                  {...register("host")}
                  error={!!errors.host}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] placeholder:opacity-100 !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.host && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.host.message}
                  </Typography>
                )}
              </div>

              <div className="w-[288px]">
                <Input
                  placeholder="number of patients"
                  {...register("number")}
                  error={!!errors.number}
                  className="w-[280px] !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] placeholder:opacity-100 !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.number && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.number.message}
                  </Typography>
                )}
              </div>

              <div className="flex items-center justify-between w-[288px]">
                <div className="!w-[135px] flex flex-col">
                  <Input
                    placeholder="db host"
                    {...register("db_host")}
                    error={!!errors.db_host}
                    className="!w-[135px] placeholder:opacity-100 !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.db_host && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.db_host.message}
                    </Typography>
                  )}
                </div>

                <div className="!w-[135px] flex flex-col">
                  <Input
                    placeholder="db port"
                    {...register("port")}
                    error={!!errors.port}
                    className="!w-[135px] placeholder:opacity-100 !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.port && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.port.message}
                    </Typography>
                  )}
                </div>
              </div>

              <div className="w-[288px]">
                <Input
                  placeholder="db username"
                  {...register("username")}
                  error={!!errors.username}
                  className="w-[280px] placeholder:opacity-100 !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.username && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.username.message}
                  </Typography>
                )}
              </div>

              <div className="flex items-center justify-between w-[288px]">
                <div className="!w-[135px] flex flex-col">
                  <Input
                    placeholder="db host"
                    {...register("db_name")}
                    error={!!errors.db_name}
                    className="!w-[135px] placeholder:opacity-100 !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.db_name && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.db_name.message}
                    </Typography>
                  )}
                </div>

                <div className="!w-[135px] flex flex-col">
                  <Input
                    placeholder="db password"
                    {...register("db_pass")}
                    error={!!errors.db_pass}
                    className="!w-[135px] placeholder:opacity-100 !border-t-blue-gray-200 focus:!border-t-[#1E1E1E] !rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.db_pass && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.db_pass.message}
                    </Typography>
                  )}
                </div>
              </div>

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

export default PatientDetailForm;
