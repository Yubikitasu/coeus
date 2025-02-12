import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Học tập và Làm việc cùng nền tảng Coeus.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Nâng cao hành trình học tập của bạn với nền tảng thông minh,
                  được cá nhân hóa của chúng tôi. Khám phá, học hỏi và phát
                  triển cùng Coeus.
                </p>
              </div>
              <div className="space-x-4 space-y-4">
                <Button>Học cùng Coeus</Button>
                <Button variant="outline">Tìm hiểu thêm</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Vì sao chọn Coeus?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-bold">Hiệu năng</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hiệu suất học tập và làm việc được nâng cao cùng Coeus.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-bold">Sáng tạo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Giúp giáo viên và học sinh có một cách học tập mới mẻ.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-bold">Hợp tác</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Với hệ thống học tập Coeus, bạn sẽ làm quen với cách học tập
                  theo thời đại.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Đánh Giá Từ Những Khách Hàng
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Phạm Phương Lâm",
                  role: "Cựu học sinh",
                  quote:
                    "Coeus đã thay đổi cách nhìn của tôi đối với việc học.",
                },
                {
                  name: "Trần Thị Lan Anh",
                  role: "Giáo viên môn Hóa",
                  quote:
                    "Coeus là một nền tảng không chỉ dành cho học sinh, mà còn dành cho giáo viên khi tiếp cận với thời đại 4.0.",
                },
                {
                  name: "Jefferey Thompson",
                  role: "Giáo viên môn tiếng Anh",
                  quote:
                    "Coeus là một nền tảng tuyệt vời, với cách tôi phân chia bài tập và bài học dày đặc.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between p-6 bg-white rounded-lg shadow dark:bg-gray-800"
                >
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Bắt Đầu Đổi Mới Cách Học Của Bạn Chưa?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Hãy tham gia Coeus ngay hôm nay và mở ra thế giới kiến ​​thức
                  trong tầm tay bạn.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex justify-center space-x-2">
                  <Button type="submit" variant="secondary">
                    Học cùng Coeus
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col justify-center gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Coeus Learning Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
