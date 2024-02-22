// Định nghĩa lớp NhanVien
class NhanVien {
    constructor(maNV, hoTen, ngaySinh, phongBan, heSoLuong) {
      this.maNV = maNV;
      this.hoTen = hoTen;
      this.ngaySinh = ngaySinh;
      this.phongBan = phongBan;
      this.heSoLuong = heSoLuong;
    }
  }
  
  // Hàm tạo bảng nhân viên
  function taoBangNhanVien(danhSach) {
    var tableContainer = document.getElementById("tableContainer");
  
    // Tạo bảng
    var table = document.createElement("table");
    table.classList.add("employee-table");
  
    // Tạo thead
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    var headers = ["Mã NV", "Họ và tên", "Ngày sinh", "Phòng ban", "Hệ số lương"];
  
    headers.forEach(function (header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
  
    // Tạo tbody
    var tbody = document.createElement("tbody");
  
    // Thêm dữ liệu nhân viên vào tbody
    danhSach.forEach(function (nhanVien) {
      var dataRow = document.createElement("tr");
      var data = [
        nhanVien.maNV,
        nhanVien.hoTen,
        nhanVien.ngaySinh,
        nhanVien.phongBan,
        nhanVien.heSoLuong.toFixed(2),
      ];
  
      data.forEach(function (value) {
        var td = document.createElement("td");
        td.textContent = value;
        dataRow.appendChild(td);
      });
  
      tbody.appendChild(dataRow);
    });
  
    // Gắn thead và tbody vào table
    table.appendChild(thead);
    table.appendChild(tbody);
  
    // Xóa bảng cũ (nếu có)
    while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
    }
  
    // Thêm bảng mới vào div
    tableContainer.appendChild(table);
  }
  
  // Danh sách nhân viên (sử dụng mục đích minh họa)
  var danhSachNhanVien = [
    new NhanVien("NV001", "Nguyễn Văn A", "01/01/1990", "Phòng A", 2.5),
    new NhanVien("NV002", "Trần Thị B", "05/05/1995", "Phòng B", 3.0),
    new NhanVien("NV003", "Lê Văn C", "10/10/1992", "Phòng C", 2.8),
  ];
  
  // Gọi hàm tạo bảng nhân viên ban đầu
  taoBangNhanVien(danhSachNhanVien);
  
  // Hàm xử lý sự kiện khi thêm nhân viên mới
  function themNhanVien(event) {
    event.preventDefault();
  
    var form = document.getElementById("addEmployeeForm");
    var maNV = document.getElementById("maNV").value;
    var hoTen = document.getElementById("hoTen").value;
    var ngaySinh = document.getElementById("ngaySinh").value;
    var phongBan = document.getElementById("phongBan").value;
    var heSoLuong = parseFloat(document.getElementById("heSoLuong").value);
  
    var newNhanVien = new NhanVien(maNV, hoTen, ngaySinh, phongBan, heSoLuong);
    danhSachNhanVien.push(newNhanVien);
  
    taoBangNhanVien(danhSachNhanVien);
  
    // Reset form
    form.reset();
  }
  
  // Gán xử lý sự kiện cho form thêm nhân viên
  var addEmployeeForm = document.getElementById("addEmployeeForm");
  addEmployeeForm.addEventListener("submit", themNhanVien);