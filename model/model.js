export class productService {
    // lấy dữ liệu get
    static async fetchData(url) {
        try {
            const reponse = await axios.get(url);
            return reponse.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // thêm data post
    static async addData(data) {
        try {
            await axios.post('http://localhost:3000/products', data);
            console.log("Đã thêm sản phẩm thành công");
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getlastId() {
        try {
            const reponse = await axios.get('http://localhost:3000/products');
            return reponse.data[reponse.data.length - 1].id;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // Xóa dữ liệu
    static async deleteData(id) {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`)
            console.log("Xóa thành công");
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getDataById(id) {
        try {
            const reponse = await axios.get(`http://localhost:3000/products/${id}`);
            return reponse.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // Sửa dữ liệu
    static async updateData(id, data) {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
            console.log(' Cập nhật thành công');
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export class payService {
    // lấy dữ liệu get
    static async fetchData(url) {
        try {
            const reponse = await axios.get('http://localhost:3000/orders');
            return reponse.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // thêm data post
    static async addData(data) {
        try {
            await axios.post('http://localhost:3000/orders', data);
            console.log("Đã thêm sản phẩm thành công");
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getlastId() {
        try {
            const reponse = await axios.get('http://localhost:3000/orders');
            return reponse.data[reponse.data.length - 1].id;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // Xóa dữ liệu
    static async deleteData(id) {
        try {
            await axios.delete(`http://localhost:3000/orders/${id}`)
            console.log("Xóa thành công");
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getDataById(id) {
        try {
            const reponse = await axios.get(`http://localhost:3000/orders/${id}`);
            return reponse.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // Sửa dữ liệu
    static async updateData(id, data) {
        try {
            await axios.put(`http://localhost:3000/orders/${id}`, data);
            console.log(' Cập nhật thành công');
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}